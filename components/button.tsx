export default function Button (props : any) {
    let { action, children } = props;
    return (
        <button onClick={action} className="bg-gray-300 hover:bg-gray-500 rounded p-8 text-5xl font-bold">{children}</button>
    )
}