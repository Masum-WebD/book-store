import { useQuery } from 'react-query';
import EachProductForShop from './EachProductForShop';
import Loading from './Loading';
import { MdOutlineCategory } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Shop = () => {

    const { data, isLoading, refetch } = useQuery("AllProducts", () => fetch("https://p-hero-bookshop.herokuapp.com/products").then(res => res.json()));

    const [filteredItem, setFilteredItem] = useState([]);

    useEffect(() => {

        setFilteredItem(data)

    }, [data])

    const filterResult = (categoryName) => {

        const result = data?.filter((curDate) => {
            return curDate.category === categoryName;
        });

        setFilteredItem(result);

    }

    if (isLoading) {
        return <Loading />
    }

    if (filteredItem === undefined) {
        refetch();
    }

    return (
        <div class="drawer drawer-mobile pt-16">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content grid lg:grid-cols-3 gap-4 py-10 px-3 relative">
                <label for="my-drawer-2" class="btn btn-primary absolute top-6 drawer-button lg:hidden">Open drawer</label>

                {
                    filteredItem?.map((EachBook) => (
                        <EachProductForShop key={EachBook._id} book={EachBook}></EachProductForShop>
                    ))
                }

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="text-left p-10 overflow-y-auto w-80 text-base-content bg-white">
                    <h1 className='text-2xl text-black font-semibold text-left'><MdOutlineCategory className='inline-block relative bottom-[2px]' /> Categories</h1>
                    <div className='border border-gray-200 mt-3'></div>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link onClick={() => filterResult('Poem')} to="">Poem</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link onClick={() => filterResult('Novel')} to="">Novel</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link onClick={() => filterResult('Drama')} to="">Drama</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link onClick={() => filterResult('History')} to="">History</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link onClick={() => filterResult('Research')} to="">Research</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link onClick={() => filterResult('Business')} to="">Business</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link onClick={() => filterResult('Criticism')} to="">Criticism</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link onClick={() => filterResult('Biography')} to="">Biography</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link onClick={() => filterResult('Phycology')} to="">Phycology</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link onClick={() => filterResult('Philosophy')} to="">Philosophy</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link onClick={() => filterResult('Science fiction')} to="">Science fiction</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link onClick={() => filterResult('Mystery and thriller')} to="">Mystery and thriller</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link onClick={() => filterResult('Fantasy and adventure')} to="">Fantasy and adventure</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link onClick={() => filterResult('Science and technologies')} to="">Science and technologies</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Shop;