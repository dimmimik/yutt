class RouteBuilder {

    static build(transfers) {

        return transfers.map(t => ({

            id: t.id,
            route: `${t.from} → ${t.to}`,
            amount: t.amount,
            fee: t.fee

        }));

    }

    static uniqueRoutes(transfers) {

        return [...new Set(

            transfers.map(
                t => `${t.from} -> ${t.to}`
            )

        )];

    }

}

module.exports = RouteBuilder;
