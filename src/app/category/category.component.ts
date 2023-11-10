import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import CATEGORY_ARTICLES_QUERY from "../apollo/queries/category/articles";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  data: any = {};
  category: any = {};
  loading = true;
  errors: any;
  leftArticlesCount: any;
  leftArticles: any[];
  rightArticles: any[];
  id: any;
  articles: any[];

  private queryCategoriesArticles: Subscription;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");
      this.queryCategoriesArticles = this.apollo
        .watchQuery({
          query: CATEGORY_ARTICLES_QUERY,
          variables: {
            id: this.id
          }
        })
        .valueChanges.subscribe(result => {
          this.data = result.data
          this.category = this.data.category.data.attributes.name
          this.articles = this.data.category.data.attributes.articles.data;
          console.log(this.data)
          this.leftArticlesCount = Math.ceil(this.articles.length / 5);
          this.leftArticles = this.articles.slice(0, this.leftArticlesCount);
          this.rightArticles = this.articles.slice(
            this.leftArticlesCount,
            this.articles.length
          );
          this.loading = result.loading;
          this.errors = result.errors;
        });
    });
  }
  ngOnDestroy() {
    this.queryCategoriesArticles.unsubscribe();
  }
}
