"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Image src="/logo-momotaro.png" alt="Momotaro Jeans Logo" width={150} height={40} />
          <nav className="space-x-6 text-sm uppercase tracking-wide">
            <a href="#about" className="hover:text-gray-500">About</a>
            <a href="#collection" className="hover:text-gray-500">Collection</a>
            <a href="#news" className="hover:text-gray-500">News</a>
            <a href="#contact" className="hover:text-gray-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Carousel (Auto Sliding) */}
      <section className="pt-24 overflow-hidden relative">
        <div className="flex w-[300%] animate-slide h-[calc(100vh-96px)]">
          <div className="relative w-1/3 h-full">
            <Image
              src="/hero-momotaro-1.jpg"
              alt="Momotaro Jeans Hero 1"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="relative w-1/3 h-full">
            <Image
              src="/hero-momotaro-2.jpg"
              alt="Momotaro Jeans Hero 2"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="relative w-1/3 h-full">
            <Image
              src="/hero-momotaro-3.jpg"
              alt="Momotaro Jeans Hero 3"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="py-20 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {/* Standard */}
          <div className="bg-white shadow-sm hover:shadow-lg transition">
            <Image src="/standard.jpg" alt="Standard Collection" width={600} height={400} />
            <div className="p-4">
              <h3 className="text-xl font-serif mb-2">Standard</h3>
              <p className="text-sm">
                Preserving the craftsmanship and character of classic denim, the Standard series features details like hidden rivets and selvage fabric woven on vintage shuttle looms, refined for a modern silhouette.
              </p>
            </div>
          </div>
          {/* Exclusive */}
          <div className="bg-white shadow-sm hover:shadow-lg transition">
            <Image src="/exclusive.jpg" alt="Exclusive Collection" width={600} height={400} />
            <div className="p-4">
              <h3 className="text-xl font-serif mb-2">Exclusive</h3>
              <p className="text-sm">
                The Exclusive collection showcases unique dyeing techniques and limited-edition fabrics, offering a distinctive take on traditional denim craftsmanship.
              </p>
            </div>
          </div>
          {/* Classic */}
          <div className="bg-white shadow-sm hover:shadow-lg transition">
            <Image src="/classic.jpg" alt="Classic Collection" width={600} height={400} />
            <div className="p-4">
              <h3 className="text-xl font-serif mb-2">Classic</h3>
              <p className="text-sm">
                Embracing vintage aesthetics, the Classic series offers timeless fits and traditional construction methods, reflecting the heritage of Japanese denim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stores */}
      <section id="stores" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Stores</h2>
        <p className="text-lg leading-relaxed mb-6">
          Experience the world of Momotaro Jeans at our flagship stores, where the atmosphere combines themes unique to denim and traditional Japanese aesthetics. Visit our Kyoto location to immerse yourself in our dedication to craftsmanship.
        </p>
        <Image
          src="/store-kyoto.jpg"
          alt="Momotaro Jeans Kyoto Store"
          width={800}
          height={500}
          className="mx-auto rounded"
        />
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Crafted in Okayama, Japan</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          <div className="bg-white shadow-sm hover:shadow-lg transition">
            <Image src="/cotton.jpg" alt="Standard Collection" width={600} height={400} />
            <div className="p-4">
              <h3 className="text-xl font-serif mb-2">THE QUALITY</h3>
              <p className="text-sm">
                We are Continuously pursuing the best highest finest quality.
                In the process of Pursuing the original in jeans manufacturing, we came across Zimbabwe cotton, which is also used for dress shirts.
                The finest cotton, we have been able to upgrade our jeans.
                We have sublimated them into &quot;tools&quot; that enrich your life.
                And then we are still enhancing the value of jeans by paying meticulous attention to every detail.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-sm hover:shadow-lg transition">
            <Image src="/color.jpg" alt="Exclusive Collection" width={600} height={400} />
            <div className="p-4">
              <h3 className="text-xl font-serif mb-2">THE COLOR</h3>
              <p className="text-sm">
                Japan has a beautiful &quot;natural indigo&quot; called &quot;Japan blue&quot; since ancient times.
                The &quot; TOKUNO BLUE &quot; has been produced through the supreme handiwork of craftsperson who dye it many times,
                the dyeing technology we developed, and the partnership with our factories.
                &quot;特濃-TOKUNO BLUE&quot;, a dark indigo color, reminds us of the deep Seto Inland Sea.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-sm hover:shadow-lg transition">
            <Image src="/newmomo.jpg" alt="Classic Collection" width={600} height={400} />
            <div className="p-4">
              <h3 className="text-xl font-serif mb-2">THE INNOVATION</h3>
              <p className="text-sm">
                MOMOTARO JEANS, born in Kojima, Okayama, has the pride of the factory and its craftsperson.
                Therefore our mission is to continue pursuing the &quot;real thing&quot; and at the same time, we are committed to the development of Jeans Street and Kojima,
                and the protecting of the beautiful Seto Inland Sea. MOMOTARO JEANS preserves tradition and keeps on innovating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="py-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-10">Our Collection</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              img: "/fanmomo.jpg",
              title: "KYO SENSU - HIRAGANA",
              desc: "This is a special order item with Miyawaki Urasenan, a long-established Kyoto fan maker. Based on the most classic fan shape called &quot;18-ken&quot;, the MOMOTARO JEANS logo is engraved on the outer frame. The design is based on a waka poem that Sugawara Michizane is said to have composed about the Kojima Karakoto. Once you pick it up and fan it, you will feel a pleasant breeze and smell a hint of musk, Miyawaki Urugian's original fragrance."
            },
            {
              img: "/straight-1.jpg",
              title: "#100 NATURAL INDIGO STRAIGHT 12.2oz",
              desc: "#100 has a straight silhouette with orthodox thickness. Based on a moderately thick thigh, this sophisticated basic silhouette has a gentle taper below the knees. Slightly deeper crotch and a structure that loosely wraps around the waist. A timeless, universal jean achieved by adopting a pattern that pursues a beautiful silhouette and comfortable fit."
            },
            {
              img: "/jacket-momo.jpg",
              title: "#002 CLASSIC DENIM JACKET 15.7oz",
              desc: "Inheriting a unique texture beloved across generations, this fabric combines durability with a soft, comfortable fit. #002 DENIM JACKET is a double-pocket jacket with the most basic fit. Featuring a relaxed body width and a moderate length for a comfortable fit. Have smart and highly functional side pockets. Designed with a pattern aimed at achieving comfortable wear and a beautiful silhouette, designed to enhance not only the wearer's appearance but also the gracefulness of their movements."
            },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-sm hover:shadow-lg transition">
              <Image src={item.img} alt={item.title} width={600} height={400} />
              <div className="p-4">
                <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} Momotaro Jeans. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>

      {/* Custom CSS for auto slide */}
      <style jsx global>{`
        @keyframes slide {
          0% { transform: translateX(0%); }
          33% { transform: translateX(-33.3333%); }
          66% { transform: translateX(-66.6666%); }
          100% { transform: translateX(0%); }
        }
        .animate-slide {
          animation: slide 20s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
