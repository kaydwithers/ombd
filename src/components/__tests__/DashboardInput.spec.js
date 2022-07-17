import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";

import { error, movies, pageIndex, searchInput } from "@/composables/useMovies";

import DashboardInput from "../dashboard/DashboardInput.vue";

test("X button click resets data.", async () => {
  expect(DashboardInput).toBeTruthy();

  const wrapper = mount(DashboardInput);

  await wrapper.get("input").setValue("test");
  await wrapper.get("button").trigger("click");

  expect(error.value).toBe(null);
  expect(movies.value.Response).toBe("");
  expect(movies.value.totalResults).toBe("0");
  expect(movies.value.Search).toStrictEqual([]);
  expect(pageIndex.value).toBe(1);
  expect(searchInput.value).toBe("");
});
