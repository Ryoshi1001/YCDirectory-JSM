import React from 'react';
import Form from 'next/form';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchFormReset from './SearchFormReset';

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <div>
    <Form action={'/'} scroll={false} className='search-form'>
      <input 
      name='query'
      defaultValue={query}
      placeholder='Search Startups'
      className='search-input'
      />
      <div className='flex gap-2'>
        {query && <SearchFormReset/>}
        <Button type='submit' className='text-white search-btn'>
          <Search className='size-5'/>
        </Button>
      </div>
    </Form>
  </div>
  );
};

export default SearchForm;



