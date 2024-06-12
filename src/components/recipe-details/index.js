import Link from "next/link";

export default function RecipeDetailsItem({ getRecipeDetails }) {
    return (
        <div className="bg-cover bg-center min-h-screen" >
            <div className="bg-gray-800 bg-opacity-75 p-6 lg:max-w-6xl max-w-2xl mx-auto rounded-lg shadow-lg">
                <Link href="/recipe-list">
                    <h className="text-white bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-md inline-block mb-6">Go to Recipe List</h>
                </Link>
                <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="w-full lg:sticky top-0 sm:flex gap-2">
                        <img 
                            src={getRecipeDetails?.image}
                            alt={getRecipeDetails?.name}
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                    <div className="lg:ml-10">
                        <h2 className="text-4xl font-extrabold text-white mb-4">{getRecipeDetails?.name}</h2>
                        <p className="text-2xl text-gray-300">{getRecipeDetails?.mealType[0]}</p>
                        <p className="text-xl text-gray-400 mt-2">{getRecipeDetails?.cuisine}</p>
                        <div className="mt-5">
                            <h3 className="text-2xl text-white">Ingredients</h3>
                            <ul className="space-y-3 list-disc mt-4 pl-4 text-lg text-gray-300">
                                {getRecipeDetails?.ingredients.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
