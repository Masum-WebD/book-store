import { useQuery } from 'react-query';
import EachProductForShop from './EachProductForShop';
import Loading from './Loading';
import { MdOutlineCategory } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Shop = () => {

    const { data: books, isLoading } = useQuery("AllProducts", () => fetch("https://p-hero-bookshop.herokuapp.com/products").then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div class="drawer drawer-mobile pt-16">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content grid lg:grid-cols-3 gap-4 py-10 px-3 relative">
                <label for="my-drawer-2" class="btn btn-primary absolute top-6 drawer-button lg:hidden">Open drawer</label>

                {
                    books?.map((EachBook) => (
                        <EachProductForShop key={EachBook._id} book={EachBook}></EachProductForShop>
                    ))
                }


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="text-left shadow-inner p-10 overflow-y-auto w-80 text-base-content">
                    <h1 className='text-2xl text-black font-semibold text-left'><MdOutlineCategory className='inline-block relative bottom-[2px]' /> Categories</h1>
                    <div className='border border-gray-200 mt-3'></div>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link to="">Poem</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link to="">Novel</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link to="">Drama</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link to="">History</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link to="">Research</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link to="">Business</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link to="">Criticism</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link to="">Biography</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link to="">Phycology</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link to="">Philosophy</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link to="">Science fiction</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link to="">Mystery and thriller</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link to="">Fantasy and adventure</Link></li>
                    <li className="text-black my-1 hover:underline hover:underline-offset-2"><Link to="">Science and technologies</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Shop;