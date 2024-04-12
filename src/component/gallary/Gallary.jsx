import PhotoAlbum from "react-photo-album";


const Gallary = () => {
    const photos = [
        { src: "https://i.ibb.co/3zqHPM9/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-shelf.jpg", width: 800, height: 600 },

        { src: "https://i.ibb.co/F6XLT5d/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg", width: 1600, height: 900 },

        { src: "https://i.ibb.co/c8B7vVy/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table.jpg", width: 1600, height: 900 },

        { src: "https://i.ibb.co/VSHv0BB/3d-rendering-loft-scandinavian-living-room-with-working-table-bookshelf.jpg", width: 1600, height: 900 },

        { src: "https://i.ibb.co/vdPw84j/night-architecture-outdoors-dusk-building-exterior-tree-grass-illuminated-generative-ai.jpg", width: 1600, height: 900 },

        { src: "https://i.ibb.co/qnQZtCM/house-isolated-field.jpg", width: 1600, height: 900 },

        { src: "https://i.ibb.co/tJGvNB3/3d-electric-car-building.jpg", width: 1600, height: 900 },

        { src: "https://i.ibb.co/2KxX3Dv/way-white-house.jpg", width: 1600, height: 900 },

        { src: "https://i.ibb.co/hZWPJsK/istockphoto-1421545971-1024x1024.jpg", width: 1600, height: 900 },

        { src: "https://i.ibb.co/kSyhx45/images-1.jpg", width: 1600, height: 900 }
    
      

  

        
      ];
    return  <PhotoAlbum layout="columns" photos={photos} />;

        
  
};

export default Gallary;