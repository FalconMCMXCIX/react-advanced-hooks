import React, { useId, useState, FormEvent } from 'react';

// Компонент для отдельного поля ввода с меткой
interface InputFieldProps {
    label: string;
    id: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, value, onChange }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" value={value} onChange={onChange} />
        </div>
    );
};

// Основной компонент формы
const UseId: React.FC = () => {
    // Использование useId для генерации уникальных идентификаторов
    const firstNameId = useId();
    const lastNameId = useId();
    const emailId = useId();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormData(prevData => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // Логика отправки данных формы
        console.log('Submitted data:', formData);
    };

    return (
        <div className="grid-item">
            <p>UseId</p>
            <form onSubmit={handleSubmit}>
                <InputField
                    label="First Name"
                    id={firstNameId}
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <InputField
                    label="Last Name"
                    id={lastNameId}
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <InputField
                    label="Email"
                    id={emailId}
                    value={formData.email}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UseId;
