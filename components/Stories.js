import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Ben Carter",
        src: "https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/108065672_353735125614755_9168679605175088906_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=jyo9BEYNtpwAX9gejD_&edm=AP_V10EBAAAA&ccb=7-4&oh=baa89da9a827718d9fcb532d5a972551&oe=61014605&_nc_sid=4f375e",
        profile: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=117115810641620&height=50&width=50&ext=1629573624&hash=AeTqUj6ZJ9Ny0P6bU_U"
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p"
    },
    {
        name: "Mark Zuckerburg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf"
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"
    }
]

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories
