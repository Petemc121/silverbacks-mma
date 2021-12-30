import { useInView } from "react-intersection-observer";

interface sessionInput {
  session: {
    id: string;
    class: string;
    animationClass: string;
    title: string;
    time: string;
  };
}

export default function Session({ session }: sessionInput) {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={inView ? session.animationClass : session.class}>
      <h4 className="session-title">{session.title}</h4>
      <span className="session-time">{session.time}</span>
    </div>
  );
}
