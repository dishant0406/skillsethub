import { useUserStore } from '@/utils/Zustand'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import { Fragment, useState } from 'react'

type Props = {
  isOpen: boolean
  setIsOpen: any
}

type InputProps = {
  name: string
  fieldName?: string,
  onChange?: any
  value?: string
}

const Input = ({ name, fieldName, onChange, value }: InputProps) => {
  return (
    <div className=''>
      <p className='text-[12px] mt-[0.5rem]'>
        {name}
      </p>
      <input value={value} name={fieldName} onChange={e => {
        onChange(e)
      }} className='w-full p-2 border border-gray-300 rounded-md' type="text" />
    </div>
  )
}


const CreateCurriculum = ({
  isOpen, setIsOpen
}: Props) => {
  const { user, setUser } = useUserStore()
  const [curriculum, setCurriculum] = useState<
    {
      title: string
      description: string
      prerequisites: string
      learningObjectives: string
      modules: {
        title: string
        content: string
        learningOutcomes: string
        duration: string
        resources: {
          title: string
          file: File | null
          type: 'textbook' | 'article' | 'video',
          subject: string
          topic: string
          link: string
        }[]
      }[]
    }
  >({
    title: '',
    description: '',
    prerequisites: '',
    learningObjectives: '',
    modules: []
  })

  const addModule = () => {
    setCurriculum({
      ...curriculum,
      modules: [...curriculum.modules, {
        title: '',
        content: '',
        learningOutcomes: '',
        duration: '',
        resources: []
      }]
    })

  }

  const addResource = (index: number) => {
    const modules = curriculum.modules
    modules[index].resources.push({
      title: '',
      file: null,
      type: 'textbook',
      subject: '',
      topic: '',
      link: ''
    })
    setCurriculum({
      ...curriculum,
      modules: modules
    })
  }

  const handleModuleChange = (e: any, index: number) => {
    const modules = curriculum.modules
    modules[index][e.target.name] = e.target.value
    setCurriculum((prevState) => {
      return {
        ...prevState,
        modules: modules
      }
    })
  }

  const handleResourceChange = (e: any, moduleIndex: number, resourceIndex: number) => {
    const modules = curriculum.modules
    modules[moduleIndex].resources[resourceIndex][e.target.name] = e.target.value
    setCurriculum((prevState) => {
      return {
        ...prevState,
        modules: modules
      }
    })
  }

  function closeModal() {

    setIsOpen(false)
    setCurriculum({
      title: '',
      description: '',
      prerequisites: '',
      learningObjectives: '',
      modules: []
    })
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleSubmit = async () => {

    const curr = { ...curriculum }
    const modules = curr.modules
    modules.forEach((module) => {
      module.resources.forEach(async (resource) => {
        const formData = new FormData()
        formData.append('files', resource.file as File)
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL}/api/upload`,
          formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        )
        const { location } = data.files[0]
        resource.link = location
        resource.file = null
      })
    })

    curr.modules = modules

    const saveCurriculum = await axios.post(`
    ${process.env.NEXT_PUBLIC_BACKEND_PROD_URL}/api/v1/curriculum/create`, {
      curriculum: curr
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    )

    setUser()
    closeModal()


  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create Curriculum
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Get started by filling in the information below to create your new curriculum.
                    </p>
                  </div>

                  <div className='mt-2 w-full'>
                    <Input onChange={(e: any) => {
                      setCurriculum((prevState) => {
                        return {
                          ...prevState,
                          title: e.target.value
                        }
                      })
                    }} name='Curriculum Name' />
                    <Input onChange={(e: any) => {
                      setCurriculum((prevState) => {
                        return {
                          ...prevState,
                          description: e.target.value
                        }
                      })
                    }} name='Curriculum Description' />
                    <Input onChange={(e: any) => {
                      setCurriculum((prevState) => {
                        return {
                          ...prevState,
                          prerequisites: e.target.value
                        }
                      })
                    }} name='Prequisites' />
                    <Input onChange={(e: any) => {
                      setCurriculum((prevState) => {
                        return {
                          ...prevState,
                          learningObjectives: e.target.value
                        }
                      })
                    }} name='Learning Objectives' />
                    <div className='mt-[1rem]'>
                      <div className='flex justify-between items-center w-full'>
                        <p className='text-[20px] font-bold mt-[0.5rem]'>
                          Modules
                        </p>
                        <p onClick={addModule} className='text-[16px] p-[0.5rem] border border-black font-bold cursor-pointer mt-[0.5rem]'>
                          <span className='font-bold'>+</span> Add Module
                        </p>

                      </div>
                      <div>
                        {
                          curriculum.modules.map((module, index) => {
                            return (
                              <div key={index} className='w-full'>
                                <p className='text-[18px] my-[0.5rem]'>
                                  Module {index + 1}
                                </p>
                                <Input value={
                                  curriculum.modules[index].title
                                } onChange={(e: any) => {
                                  handleModuleChange(e, index)
                                }} fieldName='title' name='Module Title' />
                                <Input value={
                                  curriculum.modules[index].content
                                } onChange={(e: any) => {
                                  handleModuleChange(e, index)
                                }} fieldName='content' name='Module Content' />
                                <Input value={
                                  curriculum.modules[index].learningOutcomes
                                } onChange={(e: any) => {
                                  handleModuleChange(e, index)
                                }} fieldName='learningOutcomes' name='Learning Outcomes' />
                                <Input value={
                                  curriculum.modules[index].duration
                                } onChange={(e: any) => {
                                  handleModuleChange(e, index)
                                }} fieldName='duration' name='Duration' />
                                <div className='mt-[0.5rem]'>
                                  <div className='flex justify-between items-center w-full'>
                                    <p className='text-[14px] mt-[0.5rem]'>
                                      Resources
                                    </p>
                                    <p onClick={() => addResource(index)} className='text-[14px] p-[0.5rem] border border-black cursor-pointer mt-[0.5rem]'>
                                      <span className='font-bold'>+</span> Add Resource
                                    </p>

                                  </div>
                                  <div className='flex flex-col items-end'>
                                    {
                                      module.resources.map((resource, resourceIndex) => {
                                        return (
                                          <div key={index} className='w-[95%]'>
                                            <p className='text-[18px] my-[0.5rem]'>
                                              Resource {index + 1}
                                            </p>
                                            <Input value={
                                              curriculum.modules[index].resources[resourceIndex].title
                                            } onChange={(e: any) => {
                                              handleResourceChange(e, index, resourceIndex)
                                            }} fieldName='title'
                                              name='Resource Title' />
                                            <div className='flex flex-col mt-[1rem] gap-[1rem]'>
                                              <p className='text-[12px] mt-[0.5rem]'>
                                                Resource File
                                              </p>
                                              <div className='flex relative w-full h-[3rem] bg-black/20 items-center rounded-[10px ] justify-center'>
                                                <p className='text-[12px] text-black/50'>
                                                  {
                                                    resource.file ? resource.file.name : 'Upload File'
                                                  }
                                                </p>
                                                <input onChange={(e) => {
                                                  setCurriculum((prevState) => {
                                                    const modules = prevState.modules
                                                    modules[index].resources[resourceIndex].file = e.target.files[0]
                                                    return {
                                                      ...prevState,
                                                      modules: modules
                                                    }
                                                  }
                                                  )
                                                }} className='w-full h-full opacity-0 absolute top-[0] right-[0]' type="file" />
                                              </div>
                                            </div>
                                            <div className="my-4">
                                              <label className="block text-sm font-medium text-gray-700">Type</label>
                                              <select
                                                value={
                                                  curriculum.modules[index].resources[resourceIndex].type
                                                }
                                                onChange={(e) => {
                                                  setCurriculum((prevState) => {
                                                    const modules = prevState.modules
                                                    modules[index].resources[resourceIndex].type = e.target.value
                                                    return {
                                                      ...prevState,
                                                      modules: modules
                                                    }
                                                  }
                                                  )
                                                }}
                                                required
                                                className={`mt-1 p-2 w-full border border-gray-300 rounded-md text-black `}
                                              >
                                                <option value="" disabled className='text-black/50'>Select Type</option>
                                                <option value="textbook" >Textbook</option>
                                                <option value="article">Article</option>
                                                <option value="video">Video</option>
                                              </select>
                                            </div>
                                            <Input onChange={(e: any) => {
                                              handleResourceChange(e, index, resourceIndex)
                                            }} value={
                                              curriculum.modules[index].resources[resourceIndex].subject
                                            } fieldName='subject' name='Resource Subject' />

                                            <Input
                                              onChange={(e: any) => {
                                                handleResourceChange(e, index, resourceIndex)
                                              }} value={
                                                curriculum.modules[index].resources[resourceIndex].topic
                                              } fieldName='topic'
                                              name='Resource Topic' />
                                          </div>
                                        )
                                      })
                                    }
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={
                        handleSubmit
                      }
                    >
                      Create
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CreateCurriculum