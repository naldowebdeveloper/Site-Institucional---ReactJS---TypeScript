import "./styles.css"

interface BoxProps {
  background: string;
}

export default function Box(props: BoxProps) {
  return <section classname={`box ${props.background}`}></section>
}