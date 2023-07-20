'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePathname, useSearchParams} from "next/navigation";

export default function Search() {
 const path = usePathname();
 const searchParam= useSearchParams();

  let paramsString=`{`
  let urlString=searchParam.toString();
  urlString = urlString.split('&');
  urlString.forEach(element => {
    const newElement=element.split('=');
    paramsString=[paramsString,`"`,newElement[0],`"`,`:`,`"`,newElement[1],`"`,`,`].join("")
  });
 const resultString=paramsString.slice(0,-1)+'}';

 const{location,startDate,endDate,numberOfGuests}=JSON.parse(resultString);

//  console.log(path);
//  console.log(location,startDate,endDate,numberOfGuests);

  const formatedStartDate = new Date(startDate.slice(0,-18)).toDateString();
  const formatedEndDate = new Date(endDate.slice(0,-18)).toDateString();

  const range = `${formatedStartDate}-${formatedEndDate}`;

  return (
    <div >
        <Header placeholder={`${location} | ${range} | ${numberOfGuests}` }/>
        <main className="flex">
          <section>
            <p className="text-xs my-3"> 300+ Stays -{range}- for {numberOfGuests} guests </p>
            <h1 className="text-3xl font-semibold mt-2 mb-6 ">Stays in {location}</h1>
            <div className="hidden lg:inline-flex mb-5 space-x-3 text-grau-800 whitespace-nowrap ">
              <p className="button">Cancellation Flexibility</p>
              <p className="button">Type of Place</p>
              <p className="button">Price</p>
              <p className="button">Rooms and Beds</p>
              <p className="button">More filters</p>
            </div>
          
          </section>
        </main>

        <Footer />
    </div>
  )
}
