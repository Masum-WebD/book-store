import { useQuery } from 'react-query';
import EachProductForShop from './EachProductForShop';
import Loading from './Loading';

const Shop = () => {

    const { data: books, isLoading } = useQuery("AllProducts", () => fetch("https://p-hero-bookshop.herokuapp.com/products").then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div class="drawer drawer-mobile pt-20">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content grid lg:grid-cols-3 gap-8 py-10 relative">
                <label for="my-drawer-2" class="btn btn-primary absolute top-6 drawer-button lg:hidden">Open drawer</label>

                {
                    books?.map((EachBook) => (
                        <EachProductForShop key={EachBook._id} book={EachBook}></EachProductForShop>
                    ))
                }


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Shop;