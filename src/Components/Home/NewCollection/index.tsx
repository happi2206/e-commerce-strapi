import React, { useEffect, useState } from 'react';
import NewCollectioncard from './NewCollectioncard';
import newcollectionsimage3 from '../../../assets/images/newcollectionsimage3.png';
import FeaturedProducts from '../../FeaturedProducts';
import useFetch from '../../../hooks/useFetch';
import { IProducts } from '../../../interfaces/products';
const NewCollection = () => {
  const [newCollection, setNewCollection] = useState<IProducts[]>([]);
  const { data } = useFetch(`/products?populate=*`);

  const getProducts = () => {
    if (Array.isArray(data)) {
      setNewCollection(data);
    }
  };
  useEffect(() => {
    getProducts();
  }, [data]);

  return (
    <div className="flex justify-center py-5 px-5">
      <div>
        <h1 className="ruhl text-3xl md:text-5xl lg:text-[68px] text-center">
          New Collection
        </h1>

        <p className="text-center ruhl font-light">
          Latest Arrivals from our most wanted collections.
        </p>

        <div className="flex items-center flex-wrap md:flex-nowrap justify-between space-y-5 sm:mx-32 md:mx-10 lg:mx-32 py-10">
          <FeaturedProducts />

          {newCollection.map(
            ({ attributes, id }) =>
              attributes.isNew && (
                <NewCollectioncard
                  key={id}
                  text={attributes.title}
                  image={`http://localhost:1337${attributes.img.data[0].attributes.formats.thumbnail.url}`}
                  id={id}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
