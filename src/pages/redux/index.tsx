import Todos from "@/components/Todos";
import { wrapper } from "@/redux/store";
import { getRunningQueriesThunk, getTodos, useGetTodosQuery } from "@/redux/todoApi";

export default function ReduxSSG() {
    const { data, isLoading, error } = useGetTodosQuery(undefined);

    return (
        <div>
            <h1 className="mb-3 text-3xl font-semibold text-center">Todos</h1>
            <Todos todos={data || []} />
        </div>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(
    // function gets our store and returns nextjs getServerSideProps function 
    (store) => async (context) => {
        store.dispatch(getTodos.initiate(undefined));

        await Promise.all(store.dispatch(getRunningQueriesThunk()));

        return { props: {} };
    }
);