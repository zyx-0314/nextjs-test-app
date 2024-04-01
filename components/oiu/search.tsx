"use client"

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

export function Search() {

    const [search, setSearch] = useState<boolean>(false);

    return (
        <div className="flex justify-end">
            <input
                type="text"
                placeholder="Search"
                className='border border-gray-300 rounded-lg p-0.5'
                hidden={search}
            />
            <Button
                className="border border-gray-300 px-3 py-2 ml-2"
                onClick={() => setSearch(!search)}
                variant="blank"
                rounded="full"
            >
                <FaSearch />
            </Button>
        </div>
    )


}