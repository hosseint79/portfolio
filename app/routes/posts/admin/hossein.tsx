import { Form, Link, useActionData, useTransition } from "@remix-run/react";
import { ActionFunction, json } from "@remix-run/node";
export default function AdminIndex() {
  const errors = useActionData();
  const transition = useTransition();
  console.log(transition);
  const isCreating = Boolean(transition.submission);
  return (
    <>
      <Form method="post">
        <p>
          <label>
            Post Title: <input type="text" name="title" />
          </label>
        </p>
        <p>
          <label>
            {errors?.title ? (
              <em className="text-red-600">{errors.title}</em>
            ) : null}
            Post Slug: <input type="text" name="slug" />
          </label>
        </p>
        <p>
          <label htmlFor="markdown">Markdown:</label>
          <br />
          <textarea id="markdown" rows={20} name="markdown" />
        </p>
        <p className="text-right">
          <button
            type="submit"
            className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
            disabled={isCreating}
          >
            {isCreating ? "Creating..." : "Create Post"}
          </button>
        </p>
      </Form>
      <p>
        <Link to="new" className="text-blue-600 underline">
          hossein
        </Link>
      </p>
    </>
  );
}
import { redirect } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  await new Promise((res) => setTimeout(res, 3000));
  const errors: any = {
    title: title ? null : "Title is required",
    slug: slug ? null : "Slug is required",
    markdown: markdown ? null : "Markdown is required",
  };
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json<any>(errors);
  }

  console.log("a", { title, slug, markdown });

  return redirect("/posts/admin");
};
