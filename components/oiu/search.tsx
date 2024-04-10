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
                className='border border-gray-300 rounded-3xl p-0.5 pl-4 text-black font-sans'
                hidden={search}
            />
            <Button
                className="px-2 py-2 ml-2"
                onClick={() => setSearch(!search)}
                variant="blank"
            >
                <FaSearch />
            </Button>
        </div>
    )


}