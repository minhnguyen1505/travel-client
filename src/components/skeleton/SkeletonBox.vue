<template>
  <style-skeleton-box
    :style="{
      height,
      width: computedWidth,
      borderRadius: computedBorderRadius
    }"
  />
</template>

<script>
import styled from "vue-styled-components";

const styleSkeletonBox = styled.span`
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  background-color: #dddbdd;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: shimmer 5s infinite;
    content: "";
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

export default {
  name: "SkeletonBox",
  components: {
    "style-skeleton-box": styleSkeletonBox
  },
  props: {
    maxWidth: {
      // The default maxiumum width is 100%.
      default: 100,
      type: Number
    },
    minWidth: {
      // Lines have a minimum width of 80%.
      default: 80,
      type: Number
    },
    height: {
      // Make lines the same height as text.
      default: "1em",
      type: String
    },
    width: {
      // Make it possible to define a fixed
      // width instead of using a random one.
      default: null,
      type: String
    },
    borderRadius: {
      // The default is null
      default: null,
      type: String
    }
  },
  computed: {
    computedWidth() {
      // Either use the given fixed width or
      // a random width between the given min
      // and max values.
      return (
        this.width ||
        `${Math.floor(
          Math.random() * (this.maxWidth - this.minWidth) + this.minWidth
        )}%`
      );
    },

    computedBorderRadius() {
      return this.borderRadius;
    }
  }
};
</script>
