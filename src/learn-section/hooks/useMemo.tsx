import React, { useState, useMemo, useEffect } from 'react';


const generateData = (numItems: number) => {
    return Array.from({ length: numItems }, (_, index) => ({
        id: index,
        value: `Item ${index}`,
        score: Math.floor(Math.random() * 100),
    }));
};

const data = generateData(2);

const UseMemo: React.FC = () => {
    const [filter, setFilter] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    // Мемоизируем фильтрованный и отсортированный список
    const filteredAndSortedData = useMemo(() => {
        console.log('Filtering and sorting data...');
        let filtered = data.filter(item =>
            item.value.toLowerCase().includes(filter.toLowerCase())
        );
        if (sortOrder === 'asc') {
            filtered.sort((a, b) => a.score - b.score);
        } else {
            filtered.sort((a, b) => b.score - a.score);
        }
        return filtered;
    }, [filter, sortOrder]);

    // Используем useEffect для логирования изменений фильтра и порядка сортировки
    useEffect(() => {
        console.log('Filter changed:', filter);
    }, [filter]);

    useEffect(() => {
        console.log('Sort order changed:', sortOrder);
    }, [sortOrder]);

    return (
        <div className="grid-item">
            <p>UseMemo</p>
            <input
                type="text"
                placeholder="Filter items"
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
            <button onClick={() => setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))}>
                Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
            </button>
            <ul>
                {filteredAndSortedData.map(item => (
                    <li key={item.id}>
                        {item.value} (Score: {item.score})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UseMemo;
