import React from 'react';
import './TodoList.css'

function TodoList(props) {
    const renderFunc = props.children || props.render;

    return (

        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            {props.searchedTodos.map(renderFunc)}
            {/* this is another way to map each todo: */}
            {/* props.searchedTodos.map(props.children)*/}

            <ul>

                {props.children}

            </ul>
        </section>

    );
}

export { TodoList };