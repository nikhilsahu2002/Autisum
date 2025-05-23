import React from "react";
import { Navbar } from "../Components/Navbar";

export default function Blog() {
  return (
    <div>
      <div className="absolute top-0 inset-x-0 h-64 flex items-start">
        <div className="h-24 w-2/3 bg-gradient-to-br from-blue-500 opacity-20 blur-2xl "></div>
        <div className="h-20 w-3/5 bg-gradient-to-r from-[#488ad4] opacity-40 blur-2xl "></div>
      </div>
      <Navbar />
      <div className="container mx-auto flex flex-wrap py-6 pt-20">
        {/* <!-- Posts Section --> */}
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <article className="flex flex-col shadow my-4">
            {/* <!-- Article Image --> */}
            <a href="/BlogPost" className="hover:opacity-75">
              <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a
                href="/BlogPost"
                className="text-blue-700 text-sm font-bold uppercase pb-4">
                Health Care
              </a>
              <a
                href="/BlogPost"
                className="text-3xl font-bold hover:text-gray-700 pb-4">
                Early Identification and Support
              </a>
              <p href="/BlogPost" className="text-sm pb-3">
                Published on April 25th, 2020
              </p>
              <a href="/BlogPost" className="pb-6">
                Early intervention is crucial for individuals with autism to
                reach their full potential. Recognizing the signs of autism
                early and providing appropriate support and therapy can make a
                significant difference in a person's development and quality of
                life. It's essential for parents, caregivers, and educators to
                be aware of the red flags of autism and seek professional
                guidance if concerns arise.
              </a>
              <a
                href="/BlogPost"
                className="uppercase text-gray-800 hover:text-black">
                Continue Reading <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>

          <article className="flex flex-col shadow my-4">
            {/* <!-- Article Image --> */}
            <a href="/BlogPost" className="hover:opacity-75">
              <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=2" />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a
                href="/BlogPost"
                className="text-blue-700 text-sm font-bold uppercase pb-4">
                Health Care
              </a>
              <a
                href="/BlogPost"
                className="text-3xl font-bold hover:text-gray-700 pb-4">
                Building a Supportive Community
              </a>
              <p href="/BlogPost" className="text-sm pb-3">
                Published on January 12th, 2020
              </p>
              <a href="/BlogPost" className="pb-6">
                Creating inclusive spaces involves more than just awareness; it
                requires action and empathy. By promoting acceptance,
                understanding, and accommodation, we can build a supportive
                community where individuals with autism feel valued, respected,
                and included. This involves advocating for accessible
                environments, inclusive education, and employment opportunities
                that embrace neurodiversity.
              </a>
              <a
                href="/BlogPost"
                className="uppercase text-gray-800 hover:text-black">
                Continue Reading <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>

          <article className="flex flex-col shadow my-4">
            {/* <!-- Article Image --> */}
            <a href="/BlogPost" className="hover:opacity-75">
              <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=3" />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a
                href="/BlogPost"
                className="text-blue-700 text-sm font-bold uppercase pb-4">
                Health Care
              </a>
              <a
                href="/BlogPost"
                className="text-3xl font-bold hover:text-gray-700 pb-4">
                Challenging Common Misconceptions
              </a>
              <p href="/BlogPost" className="text-sm pb-3">
                Published on October 22nd, 2019
              </p>
              <a href="/BlogPost" className="pb-6">
                Misconceptions about autism abound, perpetuating stigma and
                misunderstanding. One common myth is that individuals with
                autism lack empathy. In reality, many people with autism
                experience and express empathy in their own unique ways. Another
                misconception is that autism is solely a childhood disorder.
                While symptoms often manifest in early childhood, autism is a
                lif
              </a>
              <a
                href="/BlogPost"
                className="uppercase text-gray-800 hover:text-black">
                Continue Reading <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>

          {/* <!-- Pagination --> */}
          <div className="flex items-center py-8">
            <a
              href="/BlogPost"
              className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">
              1
            </a>
            <a
              href="/BlogPost"
              className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">
              2
            </a>
            <a
              href="/BlogPost"
              className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">
              Next <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </section>

        {/* <!-- Sidebar Section --> */}
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About Us</p>
            <p className="pb-2">
              Join us for holistic wellness guidance and support! Our mission is
              to empower healthier, happier lives through trusted resources.
              Thrive physically, mentally, and emotionally with our community.
            </p>
            <a
              href="/BlogPost"
              className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
              Get to know us
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
