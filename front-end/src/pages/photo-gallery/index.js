import Image from 'next/image';
export default function PhotoGallery() {
  return (
    <>
      <h1>Image Gallery</h1>
      <hr />
      <div className="row">
        {[1, 2, 3, 4].map((x) => {
          return (
            <div key={x} className="col-sm-3">
              <Image layout="intrinsic" src={`/images/${x}.jpg`} width="300" height="300" alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}
