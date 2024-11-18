
export default function Divider ({title}) {
    return (
        <div className="h-10 flex items-center justify-center my-6">
            <div className="h-px bg-gray-300 flex-grow"></div>
            <div className="flex items-center justify center w-4 h-4 m-2 border rounded-full border-grey-200 ">
             {title && <span className="text-sm font-semibold text-gray-600"></span>}   
            </div>
            <div className="h-px bg-gray-300 flex-grow"></div>
        </div>
    );
}