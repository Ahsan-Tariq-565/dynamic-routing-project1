import { CountryDetails } from "@/data_types/types";
import Link from "next/link";

const CountryName = ({params}: {params: {country_name: string} }) => {
    const countryDetails: CountryDetails[] = [
        {
            name: "Pakistan",
            capital: "Islamabad",
            population: 220892340,
            currency: "Rupee",
            language: "Urdu"
        },

        {
            name: "China",
            capital: "Beijing",
            population: 1439323776,
            currency: "Yuan",
            language: "Chinese"
        },

        {
            name: "Japan",
            capital: "Tokyo",
            population: 125960000,
            currency: "Yen",
            language: "Japanese"
        },

        {
            name: "India",
            capital: "New Delhi",
            population: 1380004385,
            currency: "Rupee",
            language: "Hindi"
        },

        {
            name: "Bangladesh",
            capital: "Dhaka",
            population: 185584800,
            currency: "Taka",
            language: "Bengali"
        },
        
        
    ];

    const country = countryDetails.find(
        (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
    );

    if (!country) {
        return(
            <h1 className="text-white text-center text 2xl">Country Not Found!</h1>
        );
         
    }

    return(
        <div className="text-center m-10 bg-gray-500 rounded-lg">
            <div className="text-white text-center text-xl p-4">
             <h1 className="m-4"> Name: {country.name}</h1>
             <h1 className="m-4"> Capital: {country.capital}</h1>
             <h1 className="m-4"> Population: {country.population}</h1>
             <h1 className="m-4"> Currency: {country.currency}</h1>
             <h1 className="m-4"> Language: {country.language}</h1>
             <Link href="/country" className="m-2 p-3 bg-lime-300 rounded-md hover:text-black">Back to Country List</Link>
            </div>
        </div>
    );
}

export default CountryName;