export default function Circle(props) {
    return (
        <div style={{ height: "110px", width: "500px" }}>
            <svg height="110" width="500">
                <circle
                    cx="50"
                    cy="55"
                    r="45"
                    fill="none"
                    stroke="#F0CE01"
                    strokeWidth="4"
                />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#F0CE01" fontSize="20">
                    {props.insideText}
                </text>
            </svg>
        </div>
    );
}