import Link from "next/link"; // Import Link from next/link
import {
    Card,
    CardContent,
} from "@/components/ui/card";

export default function RecipeList({ recipeList }) {
    console.log(recipeList);
    return (
        <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
            <div className="bg-gray-800 bg-opacity-75 p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full min-h-screen">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">Recipes</h2>

                <div className="text-center mb-8">
                    <Link href="/">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                            Go Home
                        </button>
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        recipeList && recipeList.length > 0 ?
                        recipeList.map((recipe) => (
                            <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
                                <Card>
                                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                            <img 
                                                src={recipe.image}
                                                alt={recipe.name}
                                                className="h-full w-full object-cover object-top"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-gray-900">{recipe.name}</h3>
                                            <div className="mt-4 flex items-center flex-wrap gap-2">
                                                <p className="text-lg text-gray-600">Rating: {recipe.rating}</p>
                                                <div className="ml-auto">
                                                    <p className="text-lg text-gray-600 font-bold">{recipe.cuisine}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        )) : <p className="text-white">No recipes available</p>
                    }
                </div>
            </div>
        </div>
    );
}
