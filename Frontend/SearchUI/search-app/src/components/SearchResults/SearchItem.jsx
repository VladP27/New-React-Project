import './SearchItem.css'

export default function SearchItem({item}){
    console.log(item)
    return(
            <img
                className='Image'
                src={item.urls.small}
                alt={item.alt_description}
            ></img>       
    )
}