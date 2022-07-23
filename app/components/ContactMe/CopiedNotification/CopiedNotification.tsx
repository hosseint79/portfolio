import { FiCheckSquare } from "react-icons/fi"

const CopiedNotification = () => {
    
    return (
            <span className="text-[#3dc66b] flex items-center">
                <FiCheckSquare
                color="#3dc66b"
                className="mx-3"
                />
                <span>Copied!</span>
            </span>
    )
}

export { CopiedNotification }