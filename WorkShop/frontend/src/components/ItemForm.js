import React from 'react'

const ItemForm = ({create}) => {
    const [post,setPost] = useState({title:'', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now(),
        }
        create(newPost)
        setPost({title:'', body: ''})
    }

    return (
    <form>
                <MyInput 
                value = {post.title}
                onChange = {e => setPost({...post, title: e.target.value })}
                type="text" 
                placeholder='Название предмета'/>

                <MyInput 
                value = {post.body}
                onChange = {e => setPost({...post, body: e.target.value })}
                type="text" 
                placeholder='Описание предмета'/>

                <MyButton onClick = {addNewPost}>Создать предмет</MyButton>
    </form>
  )
}

export default ItemForm