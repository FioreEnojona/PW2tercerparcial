export const Paging = () => {
    return (
        <section className="pagingHolder">
            <section className="pagingParameters">
                <select>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </section>
            <section className="pagingInfo">
                <span>
                    Mostrandon Página <input type="numbre"/> de TotalZ
                </span>
            </section>
            <section className="pagingNavigator">
                <button>Anterior</button>
                <button>Siguiente</button>
            </section>
        </section>
    );
}