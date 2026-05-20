import Image from 'next/image';

const roadHomeImages = [
  'road-home-training-000.jpg',
  'road-home-training-001.jpg',
  'road-home-training-002.jpg',
  'road-home-training-003.jpg',
  'road-home-training-004.jpg',
  'road-home-training-005.jpg',
  'road-home-training-006.jpg',
  'road-home-training-007.jpg',
  'road-home-training-008.jpg',
  'road-home-training-009.jpg',
  'road-home-training-010.jpg',
  'road-home-training-011.jpg',
  'road-home-training-012.jpg',
  'road-home-training-013.jpg',
  'road-home-training-014.jpg',
  'road-home-training-015.jpg',
  'road-home-training-016.jpg',
  'road-home-training-017.jpg',
  'road-home-training-018.jpg',
  'road-home-training-019.jpg',
  'road-home-training-020.jpg',
  'road-home-training-021.jpg',
  'road-home-training-023.jpg',
  'road-home-training-024.jpg',
  'road-home-training-025.jpg',
  'road-home-training-026.jpg',
  'road-home-training-027.jpg',
  'road-home-training-028.jpg',
  'road-home-training-029.jpg',
  'road-home-training-030.jpg',
  'road-home-training-031.jpg',
  'road-home-training-032.jpg',
  'road-home-training-033.jpg',
  'road-home-training-034.jpg',
  'road-home-training-039.jpg',
  'road-home-training-040.jpg',
  'road-home-training-044.jpg',
  'road-home-training-045.jpg',
  'road-home-training-046.jpg',
  'road-home-training-057.jpg',
  'road-home-training-060.jpg',
  'road-home-training-061.jpg',
  'road-home-training-066.jpg',
  'road-home-training-071.jpg',
  'road-home-training-082.jpg',
  'road-home-training-088.jpg',
  'road-home-training-091.jpg',
  'road-home-training-092.jpg',
  'road-home-training-095.jpg',
  'road-home-training-098.jpg',
  'road-home-training-102.jpg',
];

export function RoadHomeGallery() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-max">


        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {roadHomeImages.map((name, index) => (
            <figure
              key={name}
              className={`group relative overflow-hidden border border-red/20 bg-surface ${index % 7 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
            >
              <div className={`${index % 7 === 0 ? 'aspect-[4/3]' : 'aspect-square'} kenburns-frame`}> 
                <Image
                  src={`/images/road-home/${name}`}
                  alt={`Road Home Training Opportunity proposal extracted image ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-opacity duration-500 group-hover:opacity-90"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/95 to-transparent p-2 text-[9px] uppercase tracking-[1.8px] text-text/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Road Home · {String(index + 1).padStart(2, '0')}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
