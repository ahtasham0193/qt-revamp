import Layout from "@/components/Layout";
import Image from "next/image";



function Gallery({ galleryImages }) {
    return (
        <Layout>
            <section>
                <div className="w-full">
                    <div className="container">
                        <div className="w-full p-4">
                            <h1 className="hero-heading text-4xl text-center sm:text-7xl leading-normal mt-2 sm:mt-12">Gallery</h1>
                            <p className=' max-w-[700px] m-auto text-sm sm:text-lg text-center mt-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia  <br />
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                
                              
                            </p>
                        </div>
                        <div class="gap-8 columns-1 md:columns-2 lg:columns-3 mt-10">
                            {
                                galleryImages?.map((img, index) => {
                                    return <Image
                                        src={img.image}
                                        key={index}
                                        className={`w-full ${index % 2 === 0 ? 'aspect-video' : 'aspect-square'
                                            } mb-6 object-cover border border-gray-300 shadow-xl rounded-md`}
                                        width={1000}
                                        height={800}
                                        alt="Description of the image"
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>

            </section>
        </Layout>
    )
}

export default Gallery;


export async function getServerSideProps(context) {
    // Fetch data from an API, database or just hard code it.
    // The data should come as props to the Services component.

    const galleryImages = [
        { image: "/images/gallery/gallery1.png" },
        { image: "/images/gallery/gallery2.jpg"},
        { image: "/images/gallery/gallery3.jpg"},
        { image: "/images/gallery/gallery4.png"},
        { image: "/images/gallery/gallery5.png"},
        { image: "/images/gallery/gallery6.webp"},
        { image: "/images/gallery/gallery7.png"},
        { image: "/images/gallery/gallery8.png"},
        { image: "/images/gallery/gallery9.jpg"},
        { image: "/images/gallery/gallery10.webp"},
        { image: "/images/gallery/galery11.jpeg"},
        { image: "/images/gallery/gallery12.jpeg"},
        
    ]


    // By returning { props: servicesCard }, the Services component
    // will receive `servicesCard` as a prop at build time
    return {
        props: { galleryImages },
    }
}