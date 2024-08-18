import Square from './Square'
const style = {
    border: "4px solid darkblue",
    borderRadius: "10px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

// const Board = ({ squares, onClick }) => (
// 	<div style={style}>
// 		{squares.map((square, i) => (
// 			<Square key={i} value={square} onClick={() => onClick(i)} />
// 		))}
// 	</div>
// );
const Board = ({squares, onClick}) =>(
    <div style={style}>
        {squares.map((square, i)=>(
            <Square  key={i} value={square} onClick={()=>onClick(i)}></Square>
        )
        )}
    </div>
)
export default Board