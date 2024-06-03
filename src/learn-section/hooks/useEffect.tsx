import React, { useState, useEffect, useCallback } from 'react';

// Типы данных для API
interface Data {
    // Определите структуру данных, которую вы ожидаете от API
    [key: string]: any;
}

// Функция для получения данных из API
const fetchData = async (url: string): Promise<Data> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

interface DataFetchingComponentProps {
    url: string;
}

const UseEffect: React.FC<DataFetchingComponentProps> = ({ url }) => {
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchDataCallback = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await fetchData(url);
            setData(result);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        // Вызов функции для получения данных
        fetchDataCallback();
    }, [fetchDataCallback]);

    useEffect(() => {
        // Очистка данных при размонтировании компонента
        return () => {
            setData(null);
            setLoading(false);
            setError(null);
        };
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="grid-item">
            <p>UseEffect</p>
            {
                data?.map((data: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                    <p>
                        {data.name}
                    </p>
                ))
            }
        </div>
    );
};

export default UseEffect;
