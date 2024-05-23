import React from 'react';

// Assuming useActionState is a custom hook
function useActionState(increment: any, initialState: any) {
    const [state, setState] = React.useState(initialState);
    const formAction = React.useCallback(async (formData: any) => {
        const newState = await increment(state, formData);
        setState(newState);
    }, [state, increment]);

    return [state, formAction];
}

async function increment(previousState: number, formData: any): Promise<number> {
    return previousState + 1;
}

export function StatefulForm() {
    const [state, formAction] = useActionState(increment, 0);
    return (
        <div className="grid-item">
            <p>useActionState</p>
            <form>
                {state}
                <button onClick={() => formAction()}>Increment</button>
            </form>
        </div>
    )
};
