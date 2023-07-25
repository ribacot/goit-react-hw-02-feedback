export default function Section({ title, children }) {
    console.log(title)
    return <section>
        {title && <h2>{title}</h2>}
        {children }
    </section>;
}
