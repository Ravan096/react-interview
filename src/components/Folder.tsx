import { useState } from "react"

const Folder = ({ explorer }: any) => {
    const [expand, setExpand] = useState(false);
    const expandHandler = () => {
        setExpand(!expand);
    }
    return (
        <div>
            {
                explorer.isFolder ? (
                    <>
                        <div style={{ border: "1px solid red", width: "20%", display: "flex", justifyContent: "space-between", backgroundColor: "gray" }} onClick={expandHandler}>
                            <span>
                                📁{explorer.name}
                            </span>
                            <div style={{ width: "30%", display: "flex", justifyContent: "space-around" }}>
                                <button style={{ color: "white", background: "black", cursor: "pointer" }}>+📁</button>
                                <button style={{ color: "white", background: "black", cursor: "pointer" }}>+📄</button>
                            </div>
                        </div>
                        <div style={{ border: "1px solid green", backgroundColor: "gray", display: expand ? 'block' : 'none', marginLeft: "30px" }}>
                            {
                                explorer.items.map((item: any, index: any) => (
                                    <Folder key={index} explorer={item} />
                                ))
                            }
                        </div>
                    </>
                ) : (
                    <div>
                        📄{explorer.name}
                    </div>
                )
            }
        </div>
    )
}

export default Folder