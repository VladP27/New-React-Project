import './SearchItem.css'

export default function SearchItem({item}){
    console.log(item)
    return(
        <div className="Image">
            <img src ={item.urls.small} alt = {item.alt_description}/>        
        </div>
    )
}