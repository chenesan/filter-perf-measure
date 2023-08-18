import { filter } from 'graphql-anywhere';
import gql from 'graphql-tag';

const fragment = gql`
    fragment TestFragment on TestData {
        a {
            a1
            a2
        }
        b {
            b1
            b2
        }
        c {
            c1
            c2
        }
        d {
            d1
            d2
        }
        e {
            e1
            e2
        }
        f {
            f1
            f2
        }
        g {
            g1
            g2
        }
        h {
            h1
            h2
        }
        i {
            i1
            i2
        }
        j {
            j1
            j2
        }
        k {
            k1
            k2
        }
    }
`;

export default function Test({
    data,
    componentLayerCount,
}) {
    const filteredData = filter(fragment, data);
    // const filteredData = { ...data };
    if (componentLayerCount === 0) {
        return <div>test</div>;
    }

    return (
        <>
            <Test componentLayerCount={componentLayerCount - 1} data={filteredData} />
            <Test componentLayerCount={componentLayerCount - 1} data={filteredData} />
        </>
    );
}