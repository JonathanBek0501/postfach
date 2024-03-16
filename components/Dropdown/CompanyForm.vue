<template>
    <div class="relative w-full">
        <span class="block text-sm font-semibold leading-6 mb-2">
            Wie lautet die Unternehmensform?*
        </span>
      <div class="relative dropdown-toggle" :class="isOpen ? 'ring-2 ring-inset ring-indigo-600' : 'ring-1 ring-inset ring-gray-300'" @click="toggleDropdown">
        <div class="selected-items">
          <span v-if="selectedOption">{{ selectedOption }}</span>
          <span v-else class="text-gray-400">Select an option</span>
        </div>
        <IconChevronDown class="transition-all ease-out w-4" :class="isOpen ? 'rotate-180' : 'text-gray-400'" />
      </div>
      <transition name="expand">
        <div v-show="isOpen" class="dropdown-content" ref="dropdownContent">
          <ul class="select-options">
            <li v-for="(option, index) in options" :key="index" @click="toggleOption(index)">
              <span class="option-text">{{ option }}</span>
              <input type="checkbox" :checked="isSelected(index)" @change="selectOption(index)">
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        selectedOption: null,
        options: ['Collection A', 'Collection B', 'Collection C', 'Collection D', 'Collection E'],
        selectedOptionIndex: null,
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      toggleOption(index) {
        if (this.selectedOptionIndex === index) {
          this.selectedOptionIndex = null;
          this.selectedOption = null;
        } else {
          this.selectedOptionIndex = index;
          this.selectedOption = this.options[index];
          this.isOpen = false;
        }
      },
      selectOption(index) {
        this.selectedOptionIndex = index;
        this.selectedOption = this.options[index];
        this.isOpen = false; // Close dropdown after selecting an option
      },
      isSelected(index) {
        return this.selectedOptionIndex === index;
      },
    },
  };
  </script>
  
  <style scoped>
  .dropdown-toggle {
    @apply cursor-pointer flex items-center justify-between bg-white rounded-md text-gray-900 shadow-sm sm:text-sm sm:leading-6 py-3 px-4;
  }
  .dropdown-content {
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.05);
    @apply absolute top-full left-1/2 -translate-x-1/2 bg-white w-full border rounded-lg mt-2 z-10;
  }
  .select-options {
    @apply py-1 text-sm text-gray-700 dark:text-gray-200;
  }
  .select-options li {
    transition: background-color 0.3s;
    @apply cursor-pointer justify-between w-full flex items-center gap-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white px-3 py-2;
  }
  .select-options li.active {
    @apply bg-gray-100 dark:bg-gray-600;
  }
  .option-text {
    @apply select-none;
  }
  </style>
  