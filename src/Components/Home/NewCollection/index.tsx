import React from 'react';
import NewCollectioncard from './NewCollectioncard';
import newcollectionsimage1 from '../../../assets/images/newcollectionsimage1.png';
import newcollectionsimage2 from '../../../assets/images/newcollectionsimage2.png';
import newcollectionsimage3 from '../../../assets/images/newcollectionsimage3.png';
const NewCollection = () => {
  return (
    <div className="flex justify-center py-5 px-5">
      <div>
        <h1 className="ruhl text-3xl md:text-5xl lg:text-[68px] text-center">
          New Collection
        </h1>

        <p className="text-center ruhl font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis id
          convallis
        </p>

        <div className="flex items-center flex-wrap md:flex-nowrap justify-between space-y-5 sm:mx-32 md:mx-10 lg:mx-32 py-10">
          <NewCollectioncard
            text="OUPINKE Wristwatch"
            image={newcollectionsimage3}
          />
          <NewCollectioncard
            text="Baublebar Ear rings"
            image={newcollectionsimage2}
          />
          <NewCollectioncard
            text="Oma the Label NeckLace"
            image={newcollectionsimage1}
          />
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
