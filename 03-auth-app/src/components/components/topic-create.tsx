'use client'

import { Button, Input, Popover, PopoverContent, PopoverTrigger, Textarea } from '@nextui-org/react'
import React from 'react'
import { createTopic } from '@/actions'
import { useFormState } from 'react-dom'

export default function TopicCreateForm() {

  const [formState, action] = useFormState(createTopic, {
    errors: {}
  })

  return (
    <Popover placement='left'>
        <PopoverTrigger>
             <Button>Create a Topic</Button>
        </PopoverTrigger>
        <PopoverContent>
            <form action={action}>
                <div className='flex flex-col gap-4 p-4 w-80'>
                    <h3 className='text-lg'>Create a topic</h3>
                    <Input name='name' label='Name' labelPlacement='outside' placeholder='Write name of topic'
                      isInvalid={!!formState.errors.name}
                      errorMessage={formState.errors.name?.join(', ')}
                    />
                    <Textarea name='description' label='Description' labelPlacement='outside' placeholder='Describe your topic' isInvalid={!!formState.errors.description}
                      errorMessage={formState.errors.description?.join(', ')} />

                      {formState.errors._form ? <div className='p-2 rounded  bg-red-200 border border-red-300 text-xs'>{formState.errors._form?.join(', ')}</div> : null}
                    <Button type='submit'>Create Topic</Button>
                </div>
            </form>
        </PopoverContent>
    </Popover>
  )
}
