import React from "react";
import { Navbar } from "../Components/Navbar";
import Consult from "../Components/Consult";

export default function Doctorpage() {
  return (
    <div>
      <Navbar />
      <div className="absolute top-0 inset-x-0 h-64 flex items-start ">
        <div className="h-24 w-2/3 bg-gradient-to-br from-blue-500 opacity-20 blur-2xl "></div>
        <div className="h-20 w-3/5 bg-gradient-to-r from-[#488ad4] opacity-40 blur-2xl "></div>
      </div>
      <h1 className=" text-5xl justify-center flex font-extrabold mb-5 p-20">
        Doctor consultancy
      </h1>
      <div className="grid lg:grid-cols-3 place-items-center sm:grid-cols-1 gap-10">
        <Consult
          imgurl="https://drnavdeepsharma.com/sir.jpg"
          name="Dr. Navdeep Sharma"
          dis="Dr. Navdeep Sharma specializes in Ayurvedic autism therapy, aiding children with autism spectrum disorder. With 22 years of experience, he offers holistic treatment for autism, ADHD, OCD, and depression using Ayurvedic techniques."
        />
        <Consult
          imgurl="data:image/jpeg;base64,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"
          name="Dr. Alok Gupta"
          dis="Dr. Alok Gupta, a Psychiatrist in Rasulabad, Allahabad, boasts a decade of expertise in the field. Practicing at Aashirwad Clinic in Rasulabad, Allahabad, he earned his MBBS from Kempegowda Institute of Medical Sciences (KIMS), Bangalore in 2014 and M.D. (Psychiatry) "
        />
        <Consult
          imgurl="https://images.ctfassets.net/xny2w179f4ki/4Z6OEOrrTEtL73uVzq2UVY/1f4afdd934994ac1544d307400f60d8e/Abhijeet.jpg"
          name="Dr. Abhijeet Dwivedi
          "
          dis="Psychiatrist whose mode of treatment is both Pharmacotherapy and Psychotherapy (Counselling ) and whose AIM is to find a better and convenient solution for the problem.                                                                                                      "
        />
        <Consult
          imgurl="https://images1-fabric.practo.com/nigam-clinic-allahabad-1471339822-57b2dd2ed0be7.jpg/large"
          name="Dr. Pushkar Nigam
          "
          dis="Childhood behavioral Disorders and other psychiatrist problem under the guidance of Dr. Y.A. Matcheswala ( worlds renowned psychiatrist) and Dr. Patkar.After which he has gained experience in Evas Hospital New Delhi which has the largest psychiatrist O.P.D. in the country.Following which he has been serving the people of Allahabad from last 2 years. "
        />
        <Consult
          imgurl="https://images.drlogy.com/assets/uploads/img/practice-profile/doctors/photo/dr-rakesh-kumar-paswan-725d1b8cc65-2cf590d68ef.jpg"
          name="Dr. Rakesh Kumar Paswan"
          dis="Neuropsychiatrist,General Physician,General Practitioner
          15 Years Experience Overall  (7 years as specialist)"
        />
        <Consult
          imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamCPUUa_GlLJTvDVFzwSEyvNQVqsdoaLh8g&usqp=CAU"
          name="Dr. Nitesh Singh"
          dis="Dr. Nitesh Singh is a Neuropsychiatrist,Addiction Psychiatrist and Psychiatrist in Rajrooppur, Allahabad and has an experience of 10 years in these fields. Dr. Nitesh Singh practices at Prayag Eye And Mind Clinic in Rajrooppur, Allahabad. He completed M.D. (Psychiatry) from Sri Siddhartha Medical College & Research in 2014."
        />
      </div>
    </div>
  );
}
