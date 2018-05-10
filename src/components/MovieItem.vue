<template>

    <div class="movie">
        <div class="movie-col-left">
            <img v-bind:src="movie.Poster"></img>
        </div>
        <div class="movie-col-right">
            <div class="movie-title">
                <h2>{{ movie.Title }}</h2>
                <span class="movie-rating">{{ movie.Rated }}</span>
            </div>
            <div class="movie-sessions">
                <div v-for="sessions in sessions" class="session-time-wrapper">
                    <div class="session-time">{{ formatSessionTime(sessions.time) }}</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['movie', 'sessions'],
        methods: {
            formatSessionTime(raw) {
                return this.$moment(raw).format('h:mm A')
            }
        }
    }
</script>