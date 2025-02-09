import Swiper from "swiper/react"

export function TestSwiper() {
    const data = [
        {id: 1, content: "toma no cu 1"}
        {id: 2, content: "toma no cu 1"}
        {id: 3, content: "toma no cu 1"}
        {id: 4, content: "toma no cu 1"}
        {id: 4, content: "toma no cu 1"}
    ]

    return (
        <div>
                <Swiper>
        {data.map}
    </Swiper>
        </div>
    )

}