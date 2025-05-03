import { type LoaderFunction, json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
    // In a real implementation, you would check if the user is authenticated
    // and redirect to login if not. For now, we'll just return empty data.
    return json({ message: "Welcome to your dashboard" });
};

export default function Dashboard() {
    const data = useLoaderData<typeof loader>();

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <header className="bg-white dark:bg-gray-800 shadow">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Dashboard
                    </h1>
                    <div className="flex items-center space-x-4">
                        <Link
                            to="/auth-flow/logout"
                            className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        <span className="block">{data.message}</span>
                        <span className="block text-indigo-600 dark:text-indigo-400">Customize this dashboard for your needs.</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-400">
                        This is a placeholder dashboard for your auth boilerplate. Add your content, components, and functionality here.
                    </p>
                    <div className="mt-8">
                        <div className="rounded-md shadow">
                            <Link
                                to="/auth-flow/login"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 md:py-4 md:text-lg md:px-10"
                            >
                                Back to Login
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
