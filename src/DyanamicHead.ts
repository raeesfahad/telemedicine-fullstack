export default function getHead(url : String): String {


    if (url === "/") {
        return "Home"
    }
    if (url === "/services") {
        return "Services"
    }
    if (url === "/doctors") {
        return "For Doctors"
    }



    return " "
}